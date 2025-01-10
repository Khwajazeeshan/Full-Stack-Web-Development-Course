import { sumbit } from '@/actions/form';

export default function Home() {
  return (
    <div>
      <form action={sumbit}>
        <label htmlFor="name">Username</label>
        <input className="m-2 border p-2 border-black" type="text" name="name" id="name" placeholder="Username" />
        <br />
        <label htmlFor="add">Address</label>
        <input className="m-2 border p-2 border-black" id="add" name="add" type="text" placeholder="Address" />
        <br />
        <button className="m-2 border border-black" >Sumbit</button>
      </form>
    </div>
  );
}
