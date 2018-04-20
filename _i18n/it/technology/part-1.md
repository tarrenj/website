### Privata
{: .subsection-title}
## Zen è una piattaforma privata basata sulla tecnologia zero-knowledge Succinct Non-interactive ARguments of Knowledge (zk-SNARKs) con un'architettura decentralizzata di secure nodes.

### Sicura
{: .subsection-title}
## ZenCash è la prima criptovaluta con crittografia totalmente end-to-end sia a livello di nodo che tra i nodi stessi.
Oltre a zk-SNARKs, l'architettura di Zen include la crittografia a livello di nodo. Le criptovalute si affidano ai nodi per poter funzionare, noi chiediamo agli operatori dei nostri Scure Nodes di avere gli ultimi sistemi di sicurezza IT e di rete per potersi qualificare per la remunerazione dei nodi.

### Non Tracciabile
{: .subsection-title}
## Le transazioni protette sono totalmente criptate, ma allo stesso tempo possono essere verificate come valide con il consenso della rete. Il mittente, il destinatario e l'ammontare sono nascosti sulla blockchain, rendendo Zen completamente non tracciabile.

{:text-center: .text-center .mb-5}
[{% translate homepage.whitepaper.button %}]({{site.baseurl_root}}{{site.data.whitepapers[site.lang]}}){: .btn .btn-lg .btn-primary}
{:text-center}

Il Domain fronting è una tecnica versatile di aggiramento della censura che nasconde l'endpoint remoto di una comunicazione. Lavora a livello di applicazione, utilizzando l'HTTPS per comunicare con un host proibito e nel mentre far sembrare di comunicare con un altro host, approvato dal censore.

L'idea chiave è l'utilizzo di diversi nomi di dominio nei diversi livelli della comunicazione. Un dominio appare all'esterno di una richiesta HTTPS – nella richiesta 9 DNS e nell'Indicazione del Nome del Server TLS, mentre un altro dominio appare all'interno – nell'intestazione Host HTTP, invisibile al censore sotto la criptazione dell'HTTPS. Un censore che non è in grado di distinguere tra il traffico fronted e non-fronted verso un dominio è obbligato a scegliere tra consentire il traffico in aggiramento e bloccare totalmente il dominio, il che risulterebbe un costoso danno collaterale.

Il domain fronting non richiede una speciale collaborazione degli intermediari di rete. Noi identifichiamo un certo numero di servizi internet difficili da bloccare, come reti di trasmissione di contenuti, che supportano connessioni domain-fronted e che sono utili per aggirare la censura.

### Resistente
{: .subsection-title}
## Zen ha uno dei sistemi di nodi più distribuiti. Scopri di più sui Secure Nodes!
**[Controlla la nostra rete di Secure Node](https://securenodes.na.zensystem.io/)**

I Secure Nodes di Zen consentono un sistema di criptovaluta distribuito e affidabile che cripta le comunicazioni tra i nodi. La comunicazione dei nodi Zen non è simile a nessun altro traffico internet criptato, come invece è il traffico di Bitcoin. Ciò nasconde effettivamente la tipologia di attività che sta avvenendo, quasi come se gli utenti di Zen e i nodi fossero bloccati.

I requisiti di base dei Secure Nodes sono:
* Mantenere un minimo di 42 ZenCash per nodo in un indirizzo trasparente. Questo è sufficiente per dimostrare che l'operatore ha abbastanza interesse in ZenCash e scoraggia gli utenti malintenzionati dal rendere operativo un Secure Node.
* Creare e mantenere un certificato TLS valido di una Certificate Authority conosciuta. Ciò rende possibile criptare il trasferimento dei dati.
* Attivare il nodo su un server con sufficiente potenza di processore e memoria così che possa soddisfare le richieste di calcolo. Questa è una protezione contro gli attacchi DDoS.
* Mantenere una copia dell'intera blockchain di Zen. Questo assicura che nessun UTXO e nessun impegno siano persi.
* Mantenere il nodo attivo almeno per il 92% del tempo.
