const jwt = require('jsonwebtoken')

const isPermitted = async (req, res, next) => {
    try {
        const token = await req.headers.authorization
        if (!token) return res.status(404).json({ message: 'Token not found' })

        // decode token
        const splitToken = await token.split(' ')[1]
        const decode = await jwt.verify(splitToken, process.env.JWT_SECRET)

        if (decode) {
            req.user = decode
            next()
        } else {
            return res.status(401).json({ message: 'You have no permissions to access' })
        }

    } catch (error) {
        return res.status(501).json({ message: error.message })
    }
}

module.exports = isPermitted