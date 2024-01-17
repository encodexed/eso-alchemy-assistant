const Instructions = () => {
  return (
    <div className="border border-gray-300 p-1">
      <p className="text-sm">
        <span className="font-bold text-green-500">Green</span> indicates
        compatibility effects between ingredients.
        <br />
        <span className="font-bold text-red-500">Red</span> indicates this
        effect is nullifying another effect.
        <br />
        <span className="font-bold">Remove an ingredient</span> to try different
        combinations.
      </p>
    </div>
  );
};

export default Instructions;
