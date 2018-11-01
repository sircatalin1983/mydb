export default function(sequelize, DataTypes) {
    return sequelize.define('Contract', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        startDate: {
            type: DataTypes.DATE,
            field: 'StartDate'
        },
        endDate:{
            type: DataTypes.DATE,
            field: 'EndDate'
        },
        duration: {
            type: DataTypes.INTEGER,
            defaultValue: 12,
            field: 'Duration'
        },
        paymentDate: {
            type: DataTypes.INTEGER,
            defaultValue: 12,
            field: 'Duration'
        } ,
        paymentType: {
            type: DataTypes.INTEGER,
            field: 'PaymentType'
        } ,
        paymentLocation: {
            type: DataTypes.STRING,
            field: 'PaymentLocation'
        },
        paymentIBAN: {
            type: DataTypes.STRING,
            field: 'PaymentIBAN'
        },
        rent: {
            type: DataTypes.INTEGER,
            field: 'Rent'
        },
        rentInLetters: {
            type: DataTypes.STRING,
            field: 'RentInLetters'
        },
        rentCurrency: {
            type: DataTypes.INTEGER,
            field: 'RentCurrency'
        },
        upfrontPayment: {
            type: DataTypes.INTEGER,
            field: 'UpfrontPayment'
        },
        upfrontPaymentLetters: {
            type: DataTypes.INTEGER,
            field: 'UpfrontPaymentLetters'
        },
        upfrontPaymentCurrency: {
            type: DataTypes.INTEGER,
            field: 'UpfrontPaymentCurrency'
        },
        upfrontPaymentDetails: {
            type: DataTypes.INTEGER,
            field: 'UpfrontPaymentDetails'
        },
        warranty: {
            type: DataTypes.INTEGER,
            field: 'Warranty'
        },
        warrantyLetters: {
            type: DataTypes.STRING,
            field: 'WarrantyLetters'
        },
        warrantyCurrency: {
            type: DataTypes.STRING,
            field: 'WarrantyCurrency'
        },
        specialClauses: {
            type: DataTypes.STRING,
            field: 'SpecialClauses'
        }
    });
}
