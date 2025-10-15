# Chaines de caractères - TP4 - Vérification de mots de passe

## Consignes

Écrire un programme qui analyse un mot de passe prédéfinis et indique son niveau de sécurité (faible, moyen ou fort).

La fonction `verifierMotDePasse` doit :

- Vérifier qu’il contient au moins 8 caractères.
- Vérifier s’il contient au moins une majuscule, une minuscule, un chiffre et un caractère spécial (!, @, #, $, %, etc.).
- Calculer un score selon ces critères.
  - faible : 0–2 points
  - moyen : 3–4 points
  - fort : 5 points
- Retourner le niveau de sécurité.

**Signature de la fonction :**

```ts
function verifierMotDePasse(mdp: string): string;
```

## Exemples

- `verifierMotDePasse("bonjour")` doit retourner `faible`
- `verifierMotDePasse("Admin123")` doit retourner `moyen`
- `verifierMotDePasse("HeHDsT@2025")` doit retourner `fort`
