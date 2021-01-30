exports.allAccess = (req, res) => {
    res.status(200).send("Public Content")
};

exports.superAdminBoard = (req, res) => {
    res.status(200).send("super admin Content");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("admin Content");
};

exports.customerBoard = (req, res) => {
    res.status(200).send("customer Content")
};

exports.driverBoard = (req, res) => {
    res.status(200).send("driver Content")
};

exports.merchantBoard = (req, res) => {
    res.status(200).send("merchant Content")
};