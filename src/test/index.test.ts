import { verifierMotDePasse } from "../index";

describe("Vérification de mots de passe", () => {
  test("Mot de passe faible", () => {
    expect(verifierMotDePasse("bonjour")).toEqual("faible");
  });

  test("Mot de passe moyen", () => {
    expect(verifierMotDePasse("Admin123")).toEqual("moyen");
  });

  test("Mot de passe fort", () => {
    expect(verifierMotDePasse("HeHDsT@2025")).toEqual("fort");
  });
});
