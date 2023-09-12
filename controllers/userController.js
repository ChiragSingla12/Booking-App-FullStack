const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        // console.log(users);
        res.status(200).json({ allUsers: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
}
// exports.getUsers = async (req, res, next) => {
//     const users = await User.findAll();
//     console.log(users);
//     res.status(200).json({allUsers: users});
//     // .then((detail) => {
//     //     res.json(detail);
//     // })
//     // User.findAll()
//     //     .then(result => {
//     //         console.log(result);
//     //         res.render('form');
//     //     })
//     //     .catch(err => console.log(err));
// }

exports.addUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;
        // const { name, phoneNumber, email } = req.body;

        const data = await User.create(
            {
                name: name,
                email: email,
                phone: phonenumber
            });
        // const data = await User.create({ name, phone, email });
        console.log(data);
        res.status(201).json({ newUserDetail: data });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }

    // const { name, phone, email } = req.body;
    // User.create({ name, phone, email })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(err => console.log(err));
    // res.redirect('/');

}
exports.deleteUser = async (req, res, next) => {
    try {
        if (!req.params.id) {
            console.log('ID is missing');
            res.status(400).json({ err: 'id is missing' });
        }
        const uid = req.params.id;
        await User.destroy({ where: { id: uid } });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    // User.findByPk(uid)
    // .then(() => {
    //     return User.destroy();
    // })
    // .catch(err => console.log(err));

}