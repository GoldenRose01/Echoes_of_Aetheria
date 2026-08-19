# Playtest virtuale e bilanciamento

## Setup simulato

Giocatori: A e B.

Nodi rivelati:

- N01 Nodo del Fuoco Ancestrale: Fuoco 4, Terra 2.
- N02 Nodo delle Maree Sospese: Acqua 4, Vento 2.
- N03 Nodo del Bosco Magnetico: Terra 3, Vento 3.
- N04 Nodo della Forgia Nebulare: Fuoco 3, Acqua 3.
- N05 Nodo del Prisma Eterico: almeno 2 potenza in tre elementi diversi.

Mano iniziale A:

- C04 Lama Termica, Fuoco 2.
- C23 Radice di Ferro, Terra 1.
- D10 Impulso Gemello.
- C11 Canale Cristallino, Acqua 2.

Mano iniziale B:

- C20 Oracolo del Cielo, Vento 2.
- C27 Martello Tellurico, Terra 2.
- D02 Frattura di Runa.
- C07 Cuore di Magma, Fuoco 3.

## Turno 1 - Giocatore A

1. Incanala C04 Lama Termica su N04.
2. Gioca D10 Impulso Gemello e incanala C23 Radice di Ferro su N01 come azione gratuita.

Stato:

- N01: A Terra 1.
- N04: A Fuoco 2.

Nota: A divide la pressione su due Nodi, evitando di diventare troppo prevedibile.

## Turno 1 - Giocatore B

1. Incanala C20 Oracolo del Cielo su N02 e ordina le prime 2 carte del mazzo.
2. Incanala C07 Cuore di Magma su N01 e scarta 1 carta dalla mano.

Stato:

- N01: A Terra 1, B Fuoco 3.
- N02: B Vento 2.
- N04: A Fuoco 2.

Nota: B minaccia N01, ma ha bisogno di almeno Fuoco 1 e Terra 1 aggiuntivi.

## Turno 2 - Giocatore A

1. Pesca 1 carta.
2. Incanala C11 Canale Cristallino su N04.

Stato:

- N04: A Fuoco 2, A Acqua 2.

Nota: N04 e vicino alla stabilizzazione, ma richiede ancora Fuoco 1 e Acqua 1.

## Turno 2 - Giocatore B

1. Gioca D02 Frattura di Runa su C04 Lama Termica, riducendola da 2 a 1 fino alla stabilizzazione.
2. Incanala C27 Martello Tellurico su N01.

Stato:

- N01: A Terra 1, B Fuoco 3, B Terra 2. Requisito quasi completo: manca Fuoco 1.
- N04: A Fuoco 1 temporaneo, A Acqua 2.

Nota: B rallenta N04 e accelera N01, creando una scelta difficile per A.

## Turno 3 - Giocatore A

1. Pesca 1 carta: C01 Scintilla Risonante.
2. Incanala C01 Scintilla Risonante su N04 e guarda la prima carta del mazzo.

Stato:

- N04: A Fuoco 2 temporaneo, A Acqua 2. Mancano Acqua 1 e Fuoco 1 reale se la riduzione resta attiva.

Nota: A non stabilizza ancora. La Frattura di Runa ha guadagnato tempo senza bloccare completamente il gioco.

## Turno 3 - Giocatore B

1. Pesca 1 carta: C03 Fiamma di Rame.
2. Incanala C03 Fiamma di Rame su N01.

N01 raggiunge Fuoco 4 e Terra 3. Viene stabilizzato.

Maggioranza:

- A: 1 potenza.
- B: 6 potenza.

B ottiene N01.

## Turno 4 - Giocatore A

1. Pesca 1 carta: C13 Pozza Lunare.
2. Incanala C13 Pozza Lunare su N04.

N04 raggiunge Fuoco 2 temporaneo e Acqua 4, ma richiede Fuoco 3. Non viene ancora stabilizzato.

## Turno 4 - Giocatore B

1. Pesca 1 carta.
2. Incanala C16 Piuma Eolica su N02.

Stato:

- N02: B Vento 3. Mancano Acqua 4.
- N04: A Fuoco 2 temporaneo, A Acqua 4.

## Analisi di bilanciamento

La simulazione mostra tre aspetti positivi:

- I Nodi sono raggiungibili in 4-6 turni senza chiusure immediate garantite.
- Le Distorsioni rallentano o deviano il piano avversario senza eliminare troppe carte.
- I Catalizzatori valore 3 accelerano, ma hanno piccoli costi che ne riducono l'efficienza.

Rischio individuato:

- D10 Impulso Gemello puo creare turni molto esplosivi se combinata con Catalizzatori valore 1 che attivano bonus.

Aggiustamento proposto:

- Mantenere D10 limitata ai Catalizzatori valore 1 e specificare che il Catalizzatore gratuito non puo stabilizzare un Nodo nello stesso momento in cui viene giocato. In alternativa, se si vuole un gioco piu rapido, lasciare l'effetto invariato.

Decisione finale consigliata:

- Per una versione base piu pulita, D10 rimane invariata ma il mazzo contiene una sola copia. La sua forza e compensata dalla rarita e dal limite al valore 1.
