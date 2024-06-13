const fetchDatafoods = async () => {
    const dadosFood = await fetch('../../assets/data/foods.json');

    const responseDados = await dadosFood.json();

    return responseDados

}

export default fetchDatafoods;