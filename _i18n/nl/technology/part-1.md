### VERTROUWELIJK
{: .subsection-title}
## Zen is een privacygericht platform op basis van zk-SNARKS technologie (zero-knowledge Succinct Non-interactive ARguments of Knowledge), met een decentrale Secure Node architectuur.

### VEILIG
{: .subsection-title}
## ZenCash is de eerste virtuele munt met integrale versleuteling van en tussen netwerkknooppunten.
Naast de toepassing van zk-SNARKS, maakt de Zen architectuur gebruik van versleutelde netwerkknooppunten (nodes). Cryptomunten kunnen niet zonder een netwerk om transacties te verwerken en door te geven. ZenCash Secure Node beheerders moeten voldoen aan strenge, up-to-date veiligheidseisen om in aanmerking te komen voor hun beloning.

### NIET-TRACEERBAAR
{: .subsection-title}
## Afgeschermde transacties zijn volledig versleuteld, maar kunnen worden getoetst aan de consensus-criteria van het netwerk. Zender, ontvanger en bedragen zijn verborgen op de blockchain, wat Zen volledig privé en niet-traceerbaar maakt.

{:text-center: .text-center .mb-5}
[{% translate homepage.whitepaper.button %}]({{site.baseurl_root}}{{site.data.whitepapers[site.lang]}}){: .btn .btn-lg .btn-primary}
{:text-center}

Domain Fronting (domeinvoorspiegeling) is een veelzijdige techniek om censuur te omzeilen, waarbij de communicatiepartner onzichtbaar wordt gemaakt voor derden. Het werkt op applicatieniveau, gebruikmakend van HTTPS, om te communiceren met een verboden of geblokkeerde gesprekspartner of platform, waarbij het lijkt alsof met een andere, wèl toegestane partij wordt gecommuniceerd.

Het idee achter domain fronting bestaat uit het gebruikmaken van verschillende domeinnamen op verschillende niveau's. Aan de "buitenkant" van een HTTPS-verzoek (in het 9 DNS verzoek en de TLS naamserver indicatie) wordt een toegestaan domein voorgespiegeld, terwijl aan de "binnenkant" in de Host Header een ander domein wordt gebruikt, onzichtbaar voor controlerende instanties dankzij HTTPS-versleuteling. Daar de controlerence instantie geen onderscheid kan maken tussen zg. "fronted" en "non-fronted" dataverkeer naar een domein, blijft deze geen andere keus dan het verkeer toe te staan of alle verkeer naar het toegestane domein te blokkeren, wat echter grote negatieve gevolgen voor de controlerende instantie met zich mee kan brengen.

Domain Fronting heeft geen specifieke medewerking nodig van tussenliggende partijen. Er kan gebruik worden gemaakt van een aantal moeilijk te blokkeren webdiensten, zoals bijvoorbeeld Content Delivery Networks (CDN) die domain-fronted verbindingen ondersteunen en zich goed lenen voor het omzeilen van censuur.

### RESISTENT
{: .subsection-title}
## Zen heeft een van de meest vertakte netwerken. Ervaar meer over Secure Nodes!
**[Ontdek ons Secure Node netwerk](https://securenodes.na.zensystem.io/)**

Zen Secure Nodes vormen een wijdvertakt en betrouwbaar netwerk, waarbij communicatie tussen knooppunten (nodes) verleuteld plaatsvindt. In tegenstelling tot bijvoorbeeld het Bitcoin netwerkverkeer, is Zen netwerkcommunicatie niet te onderscheiden van andere versleutelde communicatie. Dit maakt het soort activiteit wat plaatsvindt onzichtbaar, waardoor de waarschijnlijkheid dat Zen gebruikers of netwerkknooppunten kunnen worden geblokkeerd afneemt.

De basisvereisten aan Secure Nodes zijn:
* Elke node moet zijn gekoppeld aan een publiek adres met daarop een saldo van minimaal 42 ZEN, waarmee in voldoende mate is aangetoond dat de node-beheerder geëngageerd is en om nodebeheer zonder daarbij een zekere mate van continuïteit te bieden te ontmoedigen.
* Voor elke node moet door de beheerder een geldig TLS-certificaat van een bekende Certificate Authority worden verkregen en toegewezen. Dit is noodzakelijk voor het versleutelde datatransport.
* De node moet draaien op een server met voldoende rekenkracht en werkgeheugen, om met regelmaat een rekenkundige toets succesvol af te kunnen leggen. Dit om bescherming te bieden tegen DDoS aanvallen.
* De node moet een volledige kopie van de Zen blockchain bevatten, om zeker te stellen dat geen UTXO's of andere bevestigingen verloren gaan.
* De node dient een uptime van minstens 92% te realiseren.
