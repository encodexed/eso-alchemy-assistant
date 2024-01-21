const Instructions = () => {
  return (
    <div className="border border-gray-200 bg-white p-1 text-gray-500 shadow-sm">
      <p className="text-sm">
        <span className="font-bold text-green-500">Green</span> indicates
        compatibility effects between ingredients.
        <br />
        <span className="font-bold text-red-500">Red</span> indicates this
        effect is nullifying another effect.
        <br />
        <span className="font-bold text-black">Remove an ingredient</span> to
        try different combinations.
      </p>
    </div>
  );
};

export default Instructions;
