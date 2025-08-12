import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function CoffeeCard({ coffee , setCoffees , coffees }) {

  const { id, name, chef, supplier, details, photo, taste, category } = coffee;

  
  const handleDelete = (id) =>{

  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost/coffee-api/deleteCoffee.php?id=${id}`,{
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.message === "Coffee deleted"){
      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    })

      const remaining = coffees.filter(cof=>cof.id !== id)
      // console.log(remaining)
      setCoffees(remaining)

    }
    
    })
  }
});

  }



  return (
    <div className="card w-full bg-base-100 shadow-md">
      <figure className="px-4 pt-4">
        <img
          src={photo || "https://via.placeholder.com/150"}
          alt={coffee?.name || "Coffee Image"}
          className="rounded-xl h-40 object-contain w-full"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{coffee?.name || "Unnamed Coffee"}</h2>

        <p><strong>Chef:</strong> {coffee?.chef || "N/A"}</p>
        <p><strong>Supplier:</strong> {coffee?.supplier || "N/A"}</p>
        <p><strong>Taste:</strong> {coffee?.taste || "N/A"}</p>
        <p><strong>Category:</strong> {coffee?.category || "N/A"}</p>
        <p><strong>Details:</strong> {coffee?.details || "No details provided."}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">View</button>
          

          <Link to={`/updateCoffee/${id}`}>
          <button className="btn btn-soft btn-sm">Edit</button>

          </Link>


          <button onClick={()=>handleDelete(id)} className="btn bg-red-500 btn-sm text-white">X</button>
        </div>
      </div>
    </div>

  );
}
