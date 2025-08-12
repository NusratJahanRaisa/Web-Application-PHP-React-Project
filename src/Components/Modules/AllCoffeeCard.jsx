import CoffeeCard from './CoffeeCard';

const AllCoffeeCard = ({ setCoffees, coffees}) => {

    // console.log("yeeeeeeeeeeee" ,coffees);
    
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                coffees.map(coffee=>
                 
                    <CoffeeCard key={coffee.id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
                )
            }
        </div>
    );
};

export default AllCoffeeCard;