
    switch (req.body.like) {
        case 1:
            addLike(res, sauceId, userId);
            break;
        case -1:
            addDislike(res, sauceId, userId);
            break;
        case 0:
            updateLikes(res, sauceId, userId);
            break;
    }
};