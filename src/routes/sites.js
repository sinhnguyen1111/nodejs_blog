const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/client/SitesController');
const homeClientController = require('../app/controllers/client/HomeClientController');
const hairServiceController = require('../app/controllers/client/HairServiceController');

// const passport = require('passport');
// require('../config/passport')(passport);
// const posts = require('../models/posts');
// const postComments = require('../models/postComments');

// Count documents
// async function getCountComments(posts) {
//     const newPosts = [];
//     for (let i = 0; i < posts.length; i++) {
//         const totalCount = await postComments.countDocuments({
//             postId: posts[i]._id,
//         });
//         newPosts.push({...posts[i]._doc, totalCount});
//     }
//     return newPosts;
// }

//GET post list and comments
router.get('/post-list', (req, res, next) => {
            posts
                .find({})
				.sort({date: -1})
                .limit(3)
            	.then(posts => {
                	getCountComments(posts).then(listPosts =>
                    	res.send(listPosts)
                	);
            	})
            .catch(next);
});

// router.post(
// 	'/login',
// 	passport.authenticate('local-login', {
// 		successRedirect: '/manager',
// 		failureRedirect: '/login',
// 		failureFlash: true,
// 	})
// );

router.get('/about',siteController.about);

// router.get('/login', function (req, res) {
// 	res.render('sites/login.ejs', { message: req.flash('loginMessage') });
// });
// router.get('/logout', function (req, res) {
// 	req.logout();
// 	res.redirect('/');
// });

router.get('/contact-us', siteController.contactUs);

router.get('/thankyou',siteController.thanks);

router.get('/get-S-header', homeClientController.getcategoryS);
router.get('/get-P-header', homeClientController.getcategoryP);
router.get('/get-type-header', homeClientController.getType);
router.get('/', homeClientController.home);

router.get('/booking', siteController.booking);

router.get('/hair-services', hairServiceController.hairService);
router.get('/hair-services/:slug', hairServiceController.show);

router.get('/hair-problems', siteController.hairProblem);

router.get('/hair-styles', siteController.hairStyle);
router.get('/hair-styles/gallery', siteController.hairStyleGallery);

router.get('/products',siteController.clientProducts);

module.exports = router;

