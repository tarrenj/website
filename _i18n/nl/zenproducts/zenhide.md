## Domain fronting is a versatile censorship circumvention technique that hides the remote endpoint of a communication.
It works at the application layer, using HTTPS, to communicate with a forbidden host while appearing to communicate with some other host, permitted by the censor.

The key idea is the use of different domain names at different layers of communication. One domain appears on the “outside” of an HTTPS request–in the 9 DNS request and TLS Server Name Indication, while another domain appears on the “inside”–in the HTTP Host header, invisible to the censor under HTTPS encryption. A censor, unable to distinguish fronted and non-fronted traffic to a domain, must choose between allowing circumvention traffic and blocking the domain entirely, which results in expensive collateral damage.

Domain fronting does not require special cooperation by network intermediaries. We identify a number of hard-to-block web services, such as content delivery networks, that support domain-fronted connections and are useful for censorship circumvention.
