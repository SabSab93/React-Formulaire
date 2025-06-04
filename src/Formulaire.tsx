
function Formulaire() {
  return (
    <form>
      <label>
        Nom:
        <input type="text" name="nom" />
      </label>
        <br />
      <label>
        Prénom:
        <input type="text" name="prenom" />
      </label> 
      <label>
        Adresse:
        <input type="text" name="adresse" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );
}
export default Formulaire;
// Compare this snippet from src/Formulaire.tsx: