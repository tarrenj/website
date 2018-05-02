### Privé
{: .subsection-title}
## Zen est une plateforme de confidentialité construite sur des arguments de connaissances succincts et non interactifs (zk-SNARKs) avec une architecture de nœuds sécurisés décentralisés.

### Sécurisé
{: .subsection-title}
## ZenCash est la première crypto-monnaie avec un cryptage de bout en bout au niveau des nœuds et entre les nœuds
En plus de zk-SNARKs, l'architecture Zen inclut le cryptage au niveau du nœud. Les cryptomonnaies reposent sur des nœuds pour fonctionner, nous exigeons que nos opérateurs de nœuds sécurisés disposent des dernières technologies et des dernières sécurités réseaux pour pouvoir prétendre à une compensation.

### Intraçable
{: .subsection-title}
## Les transactions blindées sont entièrement cryptées, mais peuvent être vérifiées comme étant valides en conformité avec le consensus du réseau. L'expéditeur, le destinataire et le montant sont cachés sur la blockchain, ce qui rend le Zen complètement intraçable.

Le domain fronting est une technique polyvalente de contournement de la censure qui cache l'extrémité éloignée d'une communication. Il fonctionne au niveau de la couche application, en utilisant HTTPS, pour communiquer avec un hôte interdit tout en semblant communiquer avec un autre hôte, autorisé par la censure.

Le principe de base est l'utilisation de différents noms de domaine à différents niveaux de communication. Un domaine apparaît à l'"extérieur" d'une requête HTTPS - dans la requête DNS 9 et l'indication de nom de serveur TLS, tandis qu'un autre domaine apparaît à l'"intérieur" - dans l'en-tête HTTP Host, invisible pour le censeur sous cryptage HTTPS. Un censeur, incapable de distinguer le trafic frontal et non frontal vers un domaine, doit choisir entre le contournement du trafic et le blocage total du domaine, ce qui entraîne des dommages collatéraux coûteux.

Le domain fronting ne nécessite pas de coopération particulière de la part des intermédiaires de réseau. Nous identifions un certain nombre de services Web difficiles à bloquer, tels que les réseaux de diffusion de contenu, qui prennent en charge les connexions en front de domaine et sont utiles pour contourner la censure.

### Résilient
{: .subsection-title}
## Zen a l'un des systèmes de nodes les plus distribués. En savoir plus sur les secure nodes!
**[Jetez un coup d'œil à notre réseau de Secure Nodes](https://securenodes.na.zensystem.io/)**

Zen Secure Nodes permet un système de crypto-monnaie distribué et fiable qui crypte les communications entre les nœuds. La communication des noeuds zen ressemble à n'importe quel autre trafic Internet crypté, contrairement au trafic Bitcoin. Cela cache effectivement le type d'activité qui a lieu, ce qui rend moins probable que les utilisateurs et les nœuds zen soient bloqués.

Les exigences de base des Secure Nodes sont:
* Maintenir un minimum de 42 ZenCash en adresse transparente par noeud. Cela démontre suffisamment que l'opérateur se soucie suffisamment de ZenCash et décourage les utilisateurs aux intentions malveillantes d'utiliser un secure node.
* Créer et maintenir un certificat TLS valide à partir d'une autorité de certification connue. Ceci permet le transport de données cryptées.
* Exécutez le nœud sur un serveur doté d'une puissance de processeur et d'une mémoire suffisantes pour qu'il puisse relever un défi informatique. Ceci protège contre les attaques DDoS.
* Maintenir une copie complète de la blockchain Zen. Cela garantit que les UTXO ou les engagements ne sont pas perdus.
* Maintenir le nœud en état de marche au moins 92 % du temps.
