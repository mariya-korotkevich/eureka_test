const { Router } = require("express");
const router = Router();
const wmic = require('wmic');

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', (req, res) => {
    const username = req.body.username;
    wmic.get_values('useraccount', 'name, name', null, function (err, values) {
        values.map(el => el.Name)
            .includes(username) ?
                res.render('exist', { username: username }) :
                res.render('notExist', { username: username });
    });
})

module.exports = router;