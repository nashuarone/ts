const totalPrice = (price: number, discount: number, isInstallment: boolean, month: number): number => {
    return price * (100 - discount) / 100 / (isInstallment ? month : 1);
};
