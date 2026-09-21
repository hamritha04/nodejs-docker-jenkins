const express = require('express');

const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
    res.json({
        status: 'Node.js application deployed through CI/CD'
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;