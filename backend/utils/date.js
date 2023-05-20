const formateDate = (date) => {
    const today = new Date(date);
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // January is 0
    const year = today.getFullYear();

    return `${year}/${month}/${day}`
}

module.exports ={ formateDate }