export default function(sequelize, DataTypes) {
    return sequelize.define('Contract', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
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
            type: DataTypes.STRING,
            field: 'RentCurrency'
        },
        upfrontPayment: {
            type: DataTypes.INTEGER,
            field: 'UpfrontPayment'
        },
        upfrontPaymentLetters: {
            type: DataTypes.STRING,
            field: 'UpfrontPaymentLetters'
        },
        upfrontPaymentCurrency: {
            type: DataTypes.STRING,
            field: 'UpfrontPaymentCurrency'
        },
        upfrontPaymentDetails: {
            type: DataTypes.STRING,
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
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        },
        idProperty: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Properties',
                key: 'Id'
            },
            field: 'IdProperty'
        }
    });
}
