import modules from '../../models/index.js';
const { Books, Users, Payments } = modules;
import dateToString from  '../../helpers/date.js';

const transformBook = book => {

    return {
        ...book._doc,
        _id: book.id,
        creator: getSingleTransformedUser.bind(this, book._doc.creator),
        membersList: getListTransformedUser.bind(this, book._doc.membersList),
        paymentsList: book._doc.paymentsList.map(payment => {
            return transformPayment(payment);
        }),

    };
}

const transformUser = user => {
    return {
        ...user._doc,
        _id: user.id,
        createdBooks: getListTransformedBooks.bind(this, user.createdBooks)
    };
}

const transformPayment = payment => {
    return {
        ...payment._doc,
        _id: payment.id,
        paidBy: getSingleTransformedUser.bind(this, payment._doc.paidBy),
        sharedBy: getListTransformedUser.bind(this, payment._doc.sharedBy),
        createdAt: dateToString(payment._doc.createdAt),
        updatedAt: dateToString(payment._doc.updatedAt)
    };
}

const getSingleTransformedBook = async bookID => {
    try {
        const book = await Books.findById(bookID);
        return transformBook(book);
    } catch (err) {
        throw err;
    }
}

const getListTransformedBooks = async bookIDs => {
    try {
        const books = await Books.find({ _id: { $in: bookIDs } });
        return books.map(book => {
            return transformBook(book);
        });
    } catch (err) {
        throw err;
    }
}


const getSingleTransformedUser = async userID => {
    try {
        const user = await Users.findById(userID);
        return transformUser(user);
    } catch (err) {
        throw err;
    }
}

const getListTransformedUser = async userIDs => {
    try {
        const users = await Users.find({ _id: { $in: userIDs } });
        return users.map(user => {
            return transformUser(user);
        });
    } catch (err) {
        throw err;
    }
}

// exports.transformBook = transformBook;
// exports.transformUser = transformUser;
export { transformBook, transformUser, getSingleTransformedBook, getListTransformedBooks, getSingleTransformedUser, getListTransformedUser };
