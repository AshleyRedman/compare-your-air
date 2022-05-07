module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            url: ['http://localhost:3000/']
        },
        assert: {
            assertions: {
                'categories:accessibility': ['error', { minScore: 0.95 }]
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
