import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToys = () => {
    useTitle("Add Toys");
  const {user} = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
     fetch("https://assignment-11-server-pink.vercel.app/addtoy", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     })
       .then((res) => res.json())
       .then((result) => {
         console.log(result);
       });
        console.log(data)
        form.reset();
    };

    const notify = () => toast("Added Data Successfully!");

    return (
      <div>
        <h3 className="text-5xl text-center font-bold mb-5">
          Add Your Toy Here
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label className="text-xl font-semibold">Toy Name</label>
          <select
            className="text-input ml-3 mr-5 bg-slate-50 text-black p-2 w-30 h-30"
            {...register("name")}
          >
            <option value="Frozen Dolls">Frozen Dolls</option>
            <option value="Mickey Mouse">Mickey Mouse</option>
            <option value="Donald Duck">Donald Duck</option>
            <option value="Animation Character">Animation Character</option>
            <option value="Disney Princess">Disney Princess</option>
            <option value="Tangled character">Tangled Character</option>
            <option value="Snow Girl">Snow Girl</option>
          </select>
          <label className="text-xl font-semibold">Toy Price</label>
          <input
            className="text-input bg-slate-50 text-black ml-3 p-2 w-30 h-30"
            {...register("price")}
          />
          <br />
          <label className="text-xl font-semibold mr-3 mt-2">Category</label>
          <select
            className="text-input bg-slate-50 text-black mr-5 mt-4 p-2 w-30 h-30"
            {...register("categoryName")}
          >
            <option value="Doll">Doll</option>
            <option value="Animated character">Animated character</option>
            <option value="Disney Princess">Disney Princess</option>
          </select>
          <label className="text-xl mr-3 font-semibold">Sub Category</label>
          <select
            className="text-input bg-slate-50 text-black p-2 w-30 h-30"
            {...register("subCategory")}
          >
            <option value="Elsa statue">Elsa statue</option>
            <option value="Long hair princess">Long hair princess</option>
            <option value="Donald duck statue">Donald duck statue</option>
            <option value="Sleeping Princess">Sleeping Princess</option>
            <option value="Moana">Moana</option>
            <option value="Mickey mouse">Mickey mouse</option>
            <option value="Pinocchio">Pinocchio</option>
            <option value="Cinderella">Cinderella</option>
            <option value="Anna statue">Anna statue</option>
          </select>
          <br />
          <label className="text-xl mt-4 font-semibold">Toy Image</label>
          <input
            className="text-input ml-3 mt-4 mb-4 bg-slate-50 text-black p-2 w-30 h-30"
            type="url"
            {...register("image")}
          />
          <br />
          <label className="text-xl mt-4 font-semibold">Seller Name</label>
          <input
            className="text-input bg-slate-50 text-black ml-3 mr-5 p-2 w-30 h-30"
            defaultValue={user?.displayName}
            {...register("sellerName")}
          />
          <label className="text-xl mt-4 font-semibold">Seller Email</label>
          <input
            className="text-input ml-3 bg-slate-50 text-black p-2 w-30 mb-2 h-30"
            defaultValue={user?.email}
            {...register("sellerEmail")}
          />
          <br />
          <label className="text-xl mt-5 mb-3 font-semibold">
            Toy Description
          </label>{" "}
          <br />
          <textarea
            className="text-input bg-slate-50 text-black p-2 w-30 h-30"
            {...register("details")}
          />
          <br />
          <lebel className="text-xl mt-4 font-semibold">Toy Quantity</lebel>
          <input
            className="text-input bg-slate-50 text-black p-2 w-30 mt-4 ml-3 mr-5 h-30"
            type="number"
            {...register("quantity")}
          />
          <lebel className="text-xl mt-4 font-semibold">Toy Rating</lebel>
          <input
            className="text-input bg-slate-50 text-black p-2 w-30 ml-3 h-30"
            type="number"
            {...register("rating")}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <button
            onClick={notify}
            className="w-60 mt-4 btn btn-secondary text-xl font-semibold"
          >
            <input type="submit" />
          </button>
          <ToastContainer />
        </form>
      </div>
    );
};

export default AddToys;