module.exports = {
    plugins: [
        require('autoprefixer')
        ({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}