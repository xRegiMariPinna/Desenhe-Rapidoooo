// Uma variável que contém múltiplos valores é chamado de ARRAY

var quickDrawDataset = ["aircraft carrier", "airplane", "alarm clock", "ambulance", "angel", "animal migration", "ant", "anvil", "apple", "arm", "asparagus",
  "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball bat", "basket", "basketball", "bat", "bathtub", "beach", "bear",
  "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday cake", "blackberry", "blueberry", "book", "boomerang",
  "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly",
  "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot",
  "castle", "cat", "ceiling fan", "cello", "cell phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee cup",
  "compass", "computer", "cookie", "cooler", "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup", "diamond", "dishwasher",
  "diving board", "dog", "dolphin", "donut", "door", "dragon", "dresser", "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant",
  "envelope", "eraser", "eye", "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire hydrant", "fireplace", "firetruck", "fish",
  "flamingo", "flashlight", "flip flops", "floor lamp", "flower", "flying saucer", "foot", "fork", "frog", "frying pan", "garden", "garden hose",
  "giraffe", "goatee", "golf club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter",
  "helmet", "hexagon", "hockey puck", "hockey stick", "horse", "hospital", "hot air balloon", "hot dog", "hot tub", "hourglass", "house",
  "house plant", "hurricane", "ice cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop",
  "leaf", "leg", "light bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker",
  "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth",
  "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint can", "palm tree", "panda",
  "pants", "paper clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup truck", "picture frame",
  "pig", "pillow", "pineapple", "pizza", "pliers", "police car", "pond", "pool", "popsicle", "postcard", "potato", "power outlet", "purse", "rabbit",
  "raccoon", "radio", "rain", "rainbow", "rake", "remote control", "rhinoceros", "rifle", "river", "roller coaster", "rollerskates", "sailboat",
  "sandwich", "saw", "saxophone", "school bus", "scissors", "scorpion", "screwdriver", "sea turtle", "see saw", "shark", "sheep", "shoe", "shorts",
  "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping bag", "smiley face", "snail", "snake", "snorkel", "snowflake", "snowman",
  "soccer ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo",
  "stethoscope", "stitches", "stop sign", "stove", "strawberry", "streetlight", "string bean", "submarine", "suitcase", "sun", "swan", "sweater",
  "swingset", "sword", "syringe", "table", "teapot", "teddy-bear", "telephone", "television", "tennis racquet", "tent", "The Eiffel Tower",
  "The Great Wall of China", "The Mona Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor",
  "traffic light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin",
  "washing machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine bottle", "wine glass", "wristwatch", "yoga", "zebra", "zigzag"];


var quickDrawDatasetPORTUGUES=["porta-avioes","aviao","despertador","ambulancia","anjo","migracao animal","formiga","bigorna","maca","braco","aspargos",
                        "machado","mochila","banana","bandagem","celeiro","beisebol","taco de beisebol","cesta","basquete","morcego","banheira","praia"," Urso",
                        "barba","cama","abelha","cinto","banco","bicicleta","binoculos","passaro","bolo de aniversario","amora","mirtilo","livro"," bumerangue",
                        "garrafa","gravata","pulseira","cerebro","pao","ponte","brocolis","vassoura","balde","escavadeira","onibus","arbusto","borboleta ",
                        "cactus","bolo","calculadora","calendario","camelo","camera","camuflagem","fogueira","vela","canhao","canoa","carro","cenoura ",
                        "castelo","gato","ventilador de teto","violoncelo","telefone celular","cadeira","lustre","igreja","circulo","clarinete","relogio","nuvem", "xicara de cafe",
                        "bussola","computador","cookie","cooler","sofa","vaca","caranguejo","crayon","crocodilo","coroa","navio de cruzeiro","copo"," diamante", "lava-loucas",
                        "prancha de mergulho", "cachorro", "golfinho", "rosquinha", "porta", "dragao", "comoda", "broca", "bateria", "pato", "haltere", "orelha", "cotovelo", "elefante",
                        "envelope", "borracha", "olho", "aculos", "rosto", "ventilador", "pena", "cerca"," dedo", "hidrante", "lareira", "bombeiro", "peixe",
                        "flamingo","lanterna","chinelos","luminaria","flor","disco voador","pe","garfo","sapo","frigideira","jardim","jardim Mangueira",
                        "girafa","cavanhaque","taco de golfe","uvas","grama","guitarra","hamburguer","martelo","mao","harpa","chapeu","fones de ouvido"," ourico","helicoptero",
                        "capacete","hexágono","disco de hoquei","taco de hoquei","cavalo","hospital","balao de ar quente","cachorro-quente","banheira de hidromassagem","ampulheta","casa",
                        "planta da casa","furacao","sorvete","jaqueta","cadeia","canguru","chave","teclado","joelho","faca","escada","lanterna", "computador portatil",
                        "folha","perna","lampada","isqueiro","farol","relampago","linha","leao","batom","lagosta","pirulito","caixa de correio"," mapa","marcador",
                        "fosforos", "megafone", "sereia", "microfone", "microondas", "macaco", "lua", "mosquito", "moto", "montanha", "rato", "bigode", "boca",
                        "caneca","cogumelo","unha","colar","nariz","oceano","octogono","polvo","cebola","forno","coruja","pincel","tinta lata","palmeira","panda",
                        "calcas","clipe de papel","para-quedas","papagaio","passaporte","amendoim","pera","ervilhas","lapis","pinguim","piano","picape", "moldura para fotos",
                        "porco","travesseiro","abacaxi","pizza","alicate","carro de policia","lago","piscina","picole","cartao postal","batata","tomada eletrica", "bolsa", "coelho",
                        "guaxinim","radio","chuva","arco-iris","ancinho","controle remoto","rinoceronte","rifle","rio","montanha russa","patins","veleiro",
                        "sanduiche","serra","saxofone","autocarro escolar","tesoura","escorpiao","chave de fenda","tartaruga marinha","serra","tubarao","ovelha","sapato" ,"calcao",
                        "pa","pia","skate","cranio","arranha-ceu","saco de dormir","carinha sorridente","caracol","cobra","snorkel","floco de neve","boneco de neve",
                        "bola de futebol","meia","lancha","aranha","colher","planilha","quadrado","rabisco","esquilo","escadas","estrela","bife"," estereo",
                        "estetoscopio","pontos","sinal de pare","fogao","morango","luz da rua","feijao","submarino","mala","sol","cisne","camisola",
                        "balanco","espada","seringa","mesa","bule","ursinho de pelucia","telefone","televisao","raquete de tenis","tenda","Torre Eiffel",
                        "A Grande Muralha da China","Mona Lisa","tigre","torradeira","dedo do pe","banheiro","dente","escova de dentes","pasta de dente","tornado","trator",
                        "semaforo","trem","arvore","triangulo","trombone","caminhao","trompete","camiseta","guarda-chuva","roupa intima","van","vaso"," violino",
                        "maquina de lavar","melancia","toboágua","baleia","roda","moinho","garrafa de vinho","copo de vinho","relogio de pulso","ioga","zebra","ziguezague"];                    


// Math.floor : quando eu tenho o 2,12984 o Math.floor arredonda para 2
// Math.floor : quando eu tenho o 2,92984 o Math.floor arredonda para 2
// quickDrawDataset.length: tamanho da array, a quantidade de elementros dentro dela
//Math.random: é um número aleatório de 0 até o tamanho da array
randomNumber = Math.floor((Math.random() * quickDrawDataset.length) + 1);
//Console.log: mostra no console o que está sendo pedido
console.log(quickDrawDataset.length)
console.log(randomNumber)
console.log(quickDrawDataset[randomNumber]);

var sketchPort = quickDrawDatasetPORTUGUES[randomNumber];
var sketch = quickDrawDataset[randomNumber];
document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch + "<br> Traduzindo: " + sketchPort;

var timerCounter = 0;
var timerCheck = "";
var drawnSketch = "";
var answerHolder = "";
var score = 0;

function updateCanvas() {
  //cor fundo
  background("white");
  // um número aleatório com o comprimento da array
  randomNumber = Math.floor((Math.random() * quickDrawDataset.length) + 1);
  //mostrar no console o desenho escolhido
  console.log(quickDrawDataset[randomNumber]);
  // pegamos o valor da array e colocamos dentro da variável sketch
  sketch = quickDrawDataset[randomNumber];
  //traduzindo o texto
  sketchPort = quickDrawDatasetPORTUGUES[randomNumber];
  //mostramos no HTML o valor do sketch
 document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch + "<br> Traduzindo: " + sketchPort;
}

//função para carregar quando inicia a página
function preload() {
  //estamos chamando o ml5 (API) para classificar a imagem do banco de dados do DoodleNet
  classifier = ml5.imageClassifier('DoodleNet');
}

// função criar
function setup() {
  // criamos uma variável chama canvas, e dentro dela, colocamos o Canvas criado com largura 280, altura 280
  canvas = createCanvas(280, 280);
  // o canvas será criado de forma centralizada
  canvas.center();
  // e a cor de fundo será branca
  background("white");
  //O código dentro deste bloco é executado uma vez quando um botão do mouse é liberado
  canvas.mouseReleased(classifyCanvas);
}


function draw() {
  //definir peso do traço como 10
  strokeWeight(10);
  //definir cor do traço como preta
  stroke(0);
  //Se o mouse for pressionado, desenhe uma linha entre as posições anterior e atual do mouse
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  // função para checar se o que foi desenhado no quadrado é igual ao banco de dados do doodlenet
  checkSketch()
  // se a resposta for igual, então marca ponto (score)
  if (drawnSketch == sketch) {
    answerHolder = "set"
    score++;
    // mostra no HTML
    document.getElementById('score').innerHTML = 'Pontuação: ' + score;
  }

}

//função para gerar o resultado do banco de dados do doodleNet
function classifyCanvas() {
  // código pré-definido para classificar a imagem
  classifier.classify(canvas, gotResult);
}

// a função gotResult tem dois parâmetros o error e o results
function gotResult(error, results) {
 //se ocorrer um erro, mostrará no console
  if (error) {
    console.error(error);
  }
  //senão, vai mostrar no console o resultado
  console.log(results);
  // vai pegar a precisão de maior valor
  drawnSketch = results[0].label;
  // e falará para nós o que o nosso desenho parece
  document.getElementById('label').innerHTML = 'Seu esboço: ' + drawnSketch.replace("_", " ");
// arredondar o valor da precisão e mostrar no HTML
  document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';
}

//função checkSketch
function checkSketch() {
  //temos um contador de tempo do lado direito da tela, mostrando o tempo gasto no desenho
  // a cada segundo adiciona mais 1 segundo
  timerCounter++;
  //mostra no html
  document.getElementById('time').innerHTML = 'Tempo: ' + timerCounter;
  //mostra no console
  console.log(timerCounter)
  //se o contador for maior que 400, então retorna ao valor zero, e tempo finalizado
  if (timerCounter > 600) {
    timerCounter = 0;
    timerCheck = "completed"
  }
  // se o contador estiver completo e também a resposta correta, então zeroa o contador, a resposta e chama a
  //função updateCanvas()
  if (timerCheck == "completed" || answerHolder == "set") {
    timerCheck = "";
    answerHolder = "";
    updateCanvas();
  }

}

