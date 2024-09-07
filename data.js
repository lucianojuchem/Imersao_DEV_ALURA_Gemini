const linguagens = [
    {
        nome: "JavaScript",
        descricao: "Linguagem de programação interpretada, multi-paradigma, fracamente tipada.",
        aplicacao: "Desenvolvimento web front-end e back-end, desenvolvimento de aplicativos móveis.",
        sintaxe: "console.log('Hello, world!');",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
    },
    {
        nome: "Python",
        descricao: "Linguagem de programação de alto nível, interpretada, de propósito geral e de sintaxe simples.",
        aplicacao: "Ciência de dados, machine learning, desenvolvimento web, automação.",
        sintaxe: "print('Hello, world!')",
        link: "https://docs.python.org/3/"
    },
    {
        nome: "C#",
        descricao: "Linguagem de programação orientada a objetos, desenvolvida pela Microsoft, amplamente utilizada para desenvolvimento de aplicativos .NET.",
        aplicacao: "Desenvolvimento de jogos, aplicativos Windows, desenvolvimento web back-end.",
        sintaxe: "Console.WriteLine(\"Hello, world!\");",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        nome: "Java",
        descricao: "Linguagem de programação orientada a objetos, robusta e portável, utilizada em diversas plataformas.",
        aplicacao: "Desenvolvimento de aplicativos Android, desenvolvimento empresarial, big data.",
        sintaxe: "System.out.println(\"Hello, world!\");",
        link: "https://docs.oracle.com/javase/8/docs/api/"
    },
    {
        nome: "Ruby",
        descricao: "Linguagem de programação interpretada, de alto nível, com foco em produtividade e sintaxe elegante.",
        aplicacao: "Desenvolvimento web (Ruby on Rails), automação, DevOps.",
        sintaxe: "puts 'Hello, world!'",
        link: "https://www.ruby-lang.org/en/"
    },
    {
        nome: "PHP",
        descricao: "Linguagem de programação voltada para o desenvolvimento web, utilizada principalmente em scripts de servidor.",
        aplicacao: "Desenvolvimento de sites dinâmicos, sistemas de gerenciamento de conteúdo.",
        sintaxe: "echo 'Hello, world!';",
        link: "https://www.php.net/"
    },
    {
        nome: "Go",
        descricao: "Linguagem de programação compilada e estaticamente tipada, criada pelo Google com foco em desempenho e concorrência.",
        aplicacao: "Desenvolvimento de sistemas distribuídos, servidores de alta performance.",
        sintaxe: "fmt.Println('Hello, world!')",
        link: "https://golang.org/doc/"
    },
    {
        nome: "Swift",
        descricao: "Linguagem de programação criada pela Apple, utilizada principalmente para o desenvolvimento de aplicativos iOS e macOS.",
        aplicacao: "Desenvolvimento de aplicativos móveis, desenvolvimento para Apple Watch e Apple TV.",
        sintaxe: "print('Hello, world!')",
        link: "https://swift.org/documentation/"
    },
    {
        nome: "Kotlin",
        descricao: "Linguagem de programação moderna, interoperável com Java e desenvolvida pela JetBrains, utilizada para Android e aplicações server-side.",
        aplicacao: "Desenvolvimento de aplicativos Android, desenvolvimento back-end.",
        sintaxe: "println('Hello, world!')",
        link: "https://kotlinlang.org/docs/home.html"
    },
    {
        nome: "Rust",
        descricao: "Linguagem de programação focada em segurança de memória e performance, utilizada para sistemas de baixo nível.",
        aplicacao: "Desenvolvimento de sistemas embutidos, sistemas de alta performance e concorrência.",
        sintaxe: "println!(\"Hello, world!\");",
        link: "https://www.rust-lang.org/learn"
    },
    {
        nome: "TypeScript",
        descricao: "Superset do JavaScript que adiciona tipagem estática opcional, melhorando a robustez do código.",
        aplicacao: "Desenvolvimento web front-end e back-end, aplicações em larga escala.",
        sintaxe: "console.log('Hello, world!');",
        link: "https://www.typescriptlang.org/docs/"
    },
    {
        nome: "Scala",
        descricao: "Linguagem de programação funcional e orientada a objetos que roda na JVM.",
        aplicacao: "Desenvolvimento de software escalável, big data, ciência de dados.",
        sintaxe: "println('Hello, world!')",
        link: "https://docs.scala-lang.org/"
    },
    {
        nome: "R",
        descricao: "Linguagem de programação e ambiente de software voltado para estatísticas e visualização de dados.",
        aplicacao: "Ciência de dados, análise estatística, machine learning.",
        sintaxe: "print('Hello, world!')",
        link: "https://www.r-project.org/"
    },
    {
        nome: "Perl",
        descricao: "Linguagem de script usada principalmente para manipulação de textos e desenvolvimento de sistemas.",
        aplicacao: "Automação de tarefas, administração de sistemas, desenvolvimento web.",
        sintaxe: "print \"Hello, world!\\n\";",
        link: "https://www.perl.org/"
    },
    {
        nome: "Dart",
        descricao: "Linguagem de programação desenvolvida pelo Google, usada principalmente para construir interfaces de usuário rápidas e eficientes.",
        aplicacao: "Desenvolvimento de apps móveis com Flutter, desenvolvimento web.",
        sintaxe: "void main() => print('Hello, world!');",
        link: "https://dart.dev/guides"
    },
    {
        nome: "Elixir",
        descricao: "Linguagem de programação funcional e concorrente, baseada na máquina virtual Erlang.",
        aplicacao: "Desenvolvimento de sistemas distribuídos e tolerantes a falhas, microservices.",
        sintaxe: "IO.puts 'Hello, world!'",
        link: "https://elixir-lang.org/getting-started/introduction.html"
    },
    {
        nome: "Lua",
        descricao: "Linguagem de script leve, usada em muitos motores de jogos e aplicações embutidas.",
        aplicacao: "Desenvolvimento de jogos, sistemas embutidos, automação.",
        sintaxe: "print('Hello, world!')",
        link: "https://www.lua.org/manual/5.4/"
    },
    {
        nome: "Haskell",
        descricao: "Linguagem de programação puramente funcional, conhecida por sua imutabilidade e funções de alta ordem.",
        aplicacao: "Ciência de dados, linguagens formais, pesquisa acadêmica.",
        sintaxe: "main = putStrLn 'Hello, world!'",
        link: "https://www.haskell.org/documentation/"
    },
    {
        nome: "Clojure",
        descricao: "Linguagem de programação funcional e dialeto de Lisp que roda na JVM, com forte suporte a imutabilidade e programação concorrente.",
        aplicacao: "Desenvolvimento de sistemas concorrentes, ciência de dados.",
        sintaxe: "(println 'Hello, world!')",
        link: "https://clojure.org/guides/getting_started"
    },
    {
        nome: "F#",
        descricao: "Linguagem funcional e orientada a objetos que roda no .NET, com foco em concisão e performance.",
        aplicacao: "Desenvolvimento financeiro, ciência de dados, computação distribuída.",
        sintaxe: "printfn \"Hello, world!\"",
        link: "https://fsharp.org/learn/"
    },
    {
        nome: "Julia",
        descricao: "Linguagem de programação de alto desempenho, projetada para computação científica e matemática.",
        aplicacao: "Ciência de dados, aprendizado de máquina, análise numérica.",
        sintaxe: "println(\"Hello, world!\")",
        link: "https://julialang.org/learning/"
    },
    {
        nome: "Shell Script",
        descricao: "Linguagem de script usada para automação de tarefas em sistemas Unix e Linux.",
        aplicacao: "Automação de processos de sistema, administração de servidores, scripts de manutenção.",
        sintaxe: "echo 'Hello, world!'",
        link: "https://bash.cyberciti.biz/guide/Main_Page"
    },
    {
        nome: "MATLAB",
        descricao: "Linguagem de programação e ambiente para computação numérica, especialmente popular em engenharia e ciência.",
        aplicacao: "Engenharia, computação científica, simulações matemáticas.",
        sintaxe: "disp('Hello, world!')",
        link: "https://www.mathworks.com/help/matlab/"
    },
    {
        nome: "Prolog",
        descricao: "Linguagem de programação lógica usada principalmente em inteligência artificial e linguagens formais.",
        aplicacao: "Desenvolvimento de IA, processamento de linguagem natural, raciocínio lógico.",
        sintaxe: "hello :- write('Hello, world!').",
        link: "https://www.swi-prolog.org/"
    },
    {
        nome: "COBOL",
        descricao: "Linguagem de programação voltada para o processamento de dados em negócios e instituições financeiras.",
        aplicacao: "Sistemas de bancos, grandes corporações, governo.",
        sintaxe: "DISPLAY 'Hello, world!'",
        link: "https://www.ibm.com/docs/en/cobol-for-zos/6.3"
    },
    {
        nome: "Fortran",
        descricao: "Linguagem de programação usada para computação científica e engenharia, especialmente para cálculos numéricos intensivos.",
        aplicacao: "Simulações científicas, modelagem matemática, física computacional.",
        sintaxe: "PRINT *, 'Hello, world!'",
        link: "https://fortran-lang.org/learn/"
    },
    {
        nome: "Ada",
        descricao: "Linguagem de programação desenvolvida para sistemas de tempo real e sistemas críticos de segurança.",
        aplicacao: "Sistemas aeronáuticos, defesa, sistemas embarcados.",
        sintaxe: "Put_Line ('Hello, world!');",
        link: "https://learn.adacore.com/"
    },
    {
        nome: "Lisp",
        descricao: "Uma das linguagens de programação mais antigas, focada em computação simbólica e inteligência artificial.",
        aplicacao: "Inteligência artificial, linguagens formais, programação funcional.",
        sintaxe: "(print \"Hello, world!\")",
        link: "https://lisp-lang.org/learn/"
    },
    {
        nome: "VHDL",
        descricao: "Linguagem de descrição de hardware usada para modelar e simular circuitos digitais.",
        aplicacao: "Projetos de circuitos digitais, sistemas embarcados, desenvolvimento de hardware.",
        sintaxe: "HELLO: process begin report 'Hello, world!'; wait; end process;",
        link: "https://www.vhdlwhiz.com/vhdl-tutorials/"
    },
    {
        nome: "Verilog",
        descricao: "Outra linguagem de descrição de hardware usada para o design e simulação de circuitos digitais.",
        aplicacao: "Design de hardware, FPGA, ASIC.",
        sintaxe: "initial begin $display(\"Hello, world!\"); end",
        link: "https://www.verilogpro.com/verilog-tutorials/"
    },
    {
        nome: "Objective-C",
        descricao: "Linguagem de programação orientada a objetos usada principalmente para desenvolvimento de aplicativos iOS antes do Swift.",
        aplicacao: "Desenvolvimento de aplicativos iOS, macOS.",
        sintaxe: "NSLog(@\"Hello, world!\");",
        link: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/"
    },
    {
        nome: "Forth",
        descricao: "Linguagem de programação de baixo nível, usada principalmente em sistemas embarcados e controle industrial.",
        aplicacao: "Sistemas embarcados, automação industrial, robótica.",
        sintaxe: ".\" Hello, world!\"",
        link: "https://www.forth.com/starting-forth/"
    },
    {
        nome: "Groovy",
        descricao: "Linguagem de script que roda na JVM e é altamente interoperável com Java, com uma sintaxe mais simples.",
        aplicacao: "Desenvolvimento web, automação de scripts, pipelines de CI/CD.",
        sintaxe: "println 'Hello, world!'",
        link: "https://groovy-lang.org/documentation.html"
    },
    {
        nome: "Solidity",
        descricao: "Linguagem de programação usada para escrever contratos inteligentes na blockchain Ethereum.",
        aplicacao: "Desenvolvimento de contratos inteligentes, aplicações descentralizadas (dApps).",
        sintaxe: "pragma solidity ^0.4.0;<br> contract HelloWorld <br> { function sayHello()<br> public pure returns (string memory)<br> { return 'Hello, world!'; } }",
        link: "https://soliditylang.org/"
    },
    {
        nome: "Erlang",
        descricao: "Linguagem de programação concorrente, projetada para sistemas distribuídos e tolerantes a falhas.",
        aplicacao: "Telecomunicações, sistemas distribuídos, servidores de alta disponibilidade.",
        sintaxe: "io:format(\"Hello, world!~n\").",
        link: "https://www.erlang.org/doc.html"
    },
    {
        nome: "Portugol",
        descricao: "Linguagem de programação educativa, utilizada para ensinar lógica de programação de forma simplificada com comandos em português.",
        aplicacao: "Educação, ensino de lógica de programação em ambientes escolares.",
        sintaxe: "escreva('Olá, mundo!')",
        link: "http://lite.acad.univali.br/portugol/"
    },
    {
        nome: "Scratch",
        descricao: "Linguagem de programação visual desenvolvida pelo MIT para ensinar conceitos de programação a crianças por meio de blocos de arrastar e soltar.",
        aplicacao: "Educação infantil, introdução à lógica de programação, desenvolvimento de jogos e animações.",
        sintaxe: "Blocos visuais (não textual)",
        link: "https://scratch.mit.edu/"
    }
];


