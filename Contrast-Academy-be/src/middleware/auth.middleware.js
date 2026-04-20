const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Contains { id, role } if you signed it correctly
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

exports.checkRole = (roles) => {
    return (req, res, next) => {
        // We need to fetch the full user if the token only has ID, 
        // OR ensure the token includes the role.
        // In our auth.service.js login, we should include the role in the token.
        
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
        }
        next();
    };
};
