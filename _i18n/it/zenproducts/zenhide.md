## Il Domain fronting è una tecnica versatile di aggiramento della censura che nasconde l'endpoint remoto di una comunicazione.
Lavora a livello di applicazione, utilizzando l'HTTPS per comunicare con un host proibito e nel mentre far sembrare di comunicare con un altro host, approvato dal censore.

L'idea chiave è l'utilizzo di diversi nomi di dominio nei diversi livelli della comunicazione. Un dominio appare all'esterno di una richiesta HTTPS – nella richiesta 9 DNS e nell'Indicazione del Nome del Server TLS, mentre un altro dominio appare all'interno – nell'intestazione Host HTTP, invisibile al censore sotto la criptazione dell'HTTPS. Un censore che non è in grado di distinguere tra il traffico fronted e non-fronted verso un dominio è obbligato a scegliere tra consentire il traffico in aggiramento e bloccare totalmente il dominio, il che risulterebbe un costoso danno collaterale.

Il domain fronting non richiede una speciale collaborazione degli intermediari di rete. Noi identifichiamo un certo numero di servizi internet difficili da bloccare, come reti di trasmissione di contenuti, che supportano connessioni domain-fronted e che sono utili per aggirare la censura.
