export const ResultFetchCompoent: React.FC<{ dbString: string }> = ({
  dbString,
}) => {
  return (
    <div>
      <h2>Ovde je resultat sa backenda</h2>
      <p>{dbString}</p>
    </div>
  );
};
