import OptionsMenu from "./OptionsMenu";

export default function Cover({ setOpenQr, data }) {
  return (
    <div className="bg-[url('https://dash.zarbyte.com/storage/cardcovers/FdQgroOpkVEvoBUmgMjdBmN407OiSXsMDZeIRcDn.png')] bg-cover bg-center min-h-40">
      <div className="flex pt-2 justify-end">
        <OptionsMenu setOpenQr={setOpenQr} data={data} />
      </div>
    </div>
  );
}
