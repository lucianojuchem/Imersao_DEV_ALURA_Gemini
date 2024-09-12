const linguagens = [
    {
        nome: "JavaScript",
        descricao: "Linguagem de programação interpretada, multi-paradigma, fracamente tipada.",
        aplicacao: "Desenvolvimento web front-end e back-end, desenvolvimento de aplicativos móveis.",
        sintaxe: "console.log('Hello, world!');",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        IDE: "Visual Studio Code, WebStorm, Sublime Text"
    },
    {
        nome: "Python",
        descricao: "Linguagem de programação de alto nível, interpretada, de propósito geral e de sintaxe simples.",
        aplicacao: "Ciência de dados, machine learning, desenvolvimento web, automação.",
        sintaxe: "print('Hello, world!')",
        link: "https://docs.python.org/3/",
        IDE: "PyCharm, Jupyter, Visual Studio Code"
    },
    {
        nome: "C#",
        descricao: "Linguagem de programação orientada a objetos, desenvolvida pela Microsoft, amplamente utilizada para desenvolvimento de aplicativos .NET.",
        aplicacao: "Desenvolvimento de jogos, aplicativos Windows, desenvolvimento web back-end.",
        sintaxe: "Console.WriteLine(\"Hello, world!\");",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        IDE: "Visual Studio, Rider"
    },
    {
        nome: "Java",
        descricao: "Linguagem de programação orientada a objetos, robusta e portável, utilizada em diversas plataformas.",
        aplicacao: "Desenvolvimento de aplicativos Android, desenvolvimento empresarial, big data.",
        sintaxe: "System.out.println(\"Hello, world!\");",
        link: "https://docs.oracle.com/javase/8/docs/api/",
        IDE: "IntelliJ IDEA, Eclipse, NetBeans"
    },
    {
        nome: "Ruby",
        descricao: "Linguagem de programação interpretada, de alto nível, com foco em produtividade e sintaxe elegante.",
        aplicacao: "Desenvolvimento web (Ruby on Rails), automação, DevOps.",
        sintaxe: "puts 'Hello, world!'",
        link: "https://www.ruby-lang.org/en/",
        IDE: "RubyMine, Visual Studio Code"
    },
    {
        nome: "PHP",
        descricao: "Linguagem de programação voltada para o desenvolvimento web, utilizada principalmente em scripts de servidor.",
        aplicacao: "Desenvolvimento de sites dinâmicos, sistemas de gerenciamento de conteúdo.",
        sintaxe: "echo 'Hello, world!';",
        link: "https://www.php.net/",
        IDE: "PhpStorm, Visual Studio Code"
    },
    {
        nome: "Go",
        descricao: "Linguagem de programação compilada e estaticamente tipada, criada pelo Google com foco em desempenho e concorrência.",
        aplicacao: "Desenvolvimento de sistemas distribuídos, servidores de alta performance.",
        sintaxe: "fmt.Println('Hello, world!')",
        link: "https://golang.org/doc/",
        IDE: "GoLand, Visual Studio Code"
    },
    {
        nome: "Swift",
        descricao: "Linguagem de programação criada pela Apple, utilizada principalmente para o desenvolvimento de aplicativos iOS e macOS.",
        aplicacao: "Desenvolvimento de aplicativos móveis, desenvolvimento para Apple Watch e Apple TV.",
        sintaxe: "print('Hello, world!')",
        link: "https://swift.org/documentation/",
        IDE: "Xcode"
    },
    {
        nome: "Kotlin",
        descricao: "Linguagem de programação moderna, interoperável com Java e desenvolvida pela JetBrains, utilizada para Android e aplicações server-side.",
        aplicacao: "Desenvolvimento de aplicativos Android, desenvolvimento back-end.",
        sintaxe: "println('Hello, world!')",
        link: "https://kotlinlang.org/docs/home.html",
        IDE: "IntelliJ IDEA, Android Studio"
    },
    {
        nome: "Rust",
        descricao: "Linguagem de programação focada em segurança de memória e performance, utilizada para sistemas de baixo nível.",
        aplicacao: "Desenvolvimento de sistemas embutidos, sistemas de alta performance e concorrência.",
        sintaxe: "println!(\"Hello, world!\");",
        link: "https://www.rust-lang.org/learn",
        IDE: "CLion, Visual Studio Code"
    },
    {
        nome: "TypeScript",
        descricao: "Superset do JavaScript que adiciona tipagem estática opcional, melhorando a robustez do código.",
        aplicacao: "Desenvolvimento web front-end e back-end, aplicações em larga escala.",
        sintaxe: "console.log('Hello, world!');",
        link: "https://www.typescriptlang.org/docs/",
        IDE: "Visual Studio Code, WebStorm"
    },
    {
        nome: "Scala",
        descricao: "Linguagem de programação funcional e orientada a objetos que roda na JVM.",
        aplicacao: "Desenvolvimento de software escalável, big data, ciência de dados.",
        sintaxe: "println('Hello, world!')",
        link: "https://docs.scala-lang.org/",
        IDE: "IntelliJ IDEA, Eclipse"
    },
    {
        nome: "R",
        descricao: "Linguagem de programação e ambiente de software voltado para estatísticas e visualização de dados.",
        aplicacao: "Ciência de dados, análise estatística, machine learning.",
        sintaxe: "print('Hello, world!')",
        link: "https://www.r-project.org/",
        IDE: "RStudio"
    },
    {
        nome: "Perl",
        descricao: "Linguagem de script usada principalmente para manipulação de textos e desenvolvimento de sistemas.",
        aplicacao: "Automação de tarefas, administração de sistemas, desenvolvimento web.",
        sintaxe: "print \"Hello, world!\\n\";",
        link: "https://www.perl.org/",
        IDE: "Padre, Komodo Edit"
    },
    {
        nome: "Dart",
        descricao: "Linguagem de programação desenvolvida pelo Google, usada principalmente para construir interfaces de usuário rápidas e eficientes.",
        aplicacao: "Desenvolvimento de apps móveis com Flutter, desenvolvimento web.",
        sintaxe: "void main() => print('Hello, world!');",
        link: "https://dart.dev/guides",
        IDE: "IntelliJ IDEA, Visual Studio Code"
    },
    {
        nome: "Elixir",
        descricao: "Linguagem de programação funcional e concorrente, baseada na máquina virtual Erlang.",
        aplicacao: "Desenvolvimento de sistemas distribuídos e tolerantes a falhas, microservices.",
        sintaxe: "IO.puts 'Hello, world!'",
        link: "https://elixir-lang.org/getting-started/introduction.html",
        IDE: "Visual Studio Code, IntelliJ IDEA"
    },
    {
        nome: "Lua",
        descricao: "Linguagem de script leve, usada em muitos motores de jogos e aplicações embutidas.",
        aplicacao: "Desenvolvimento de jogos, sistemas embutidos, automação.",
        sintaxe: "print('Hello, world!')",
        link: "https://www.lua.org/manual/5.4/",
        IDE: "ZeroBrane Studio, Visual Studio Code"
    },
    {
        nome: "Haskell",
        descricao: "Linguagem de programação puramente funcional, conhecida por sua imutabilidade e funções de alta ordem.",
        aplicacao: "Ciência de dados, linguagens formais, pesquisa acadêmica.",
        sintaxe: "main = putStrLn 'Hello, world!'",
        link: "https://www.haskell.org/documentation/",
        IDE: "Visual Studio Code, IntelliJ IDEA"
    },
    {
        nome: "Clojure",
        descricao: "Linguagem de programação funcional e dialeto de Lisp que roda na JVM, com forte suporte a imutabilidade e programação concorrente.",
        aplicacao: "Desenvolvimento de sistemas concorrentes, ciência de dados.",
        sintaxe: "(println 'Hello, world!')",
        link: "https://clojure.org/guides/getting_started",
        IDE: "IntelliJ IDEA, Visual Studio Code"
    },
    {
        nome: "F#",
        descricao: "Linguagem funcional e orientada a objetos que roda no .NET, com foco em concisão e performance.",
        aplicacao: "Desenvolvimento financeiro, ciência de dados, computação distribuída.",
        sintaxe: "printfn \"Hello, world!\"",
        link: "https://fsharp.org/learn/",
        IDE: "Visual Studio, Rider"
    },
    {
        nome: "Julia",
        descricao: "Linguagem de programação de alto desempenho, projetada para computação científica e matemática.",
        aplicacao: "Ciência de dados, aprendizado de máquina, análise numérica.",
        sintaxe: "println(\"Hello, world!\")",
        link: "https://julialang.org/learning/",
        IDE: "Juno, Visual Studio Code"
    },
    {
        nome: "Shell Script",
        descricao: "Linguagem de script usada para automação de tarefas em sistemas Unix e Linux.",
        aplicacao: "Automação de processos de sistema, administração de servidores, scripts de manutenção.",
        sintaxe: "echo 'Hello, world!'",
        link: "https://www.gnu.org/software/bash/manual/bash.html",
        IDE: "Visual Studio Code, Atom"
    },
    {
        nome: "MATLAB",
        descricao: "Linguagem de programação e ambiente para computação numérica, especialmente popular em engenharia e ciência.",
        aplicacao: "Engenharia, computação científica, simulações matemáticas.",
        sintaxe: "disp('Hello, world!')",
        link: "https://www.mathworks.com/help/matlab/",
        IDE: "MATLAB"
    },
    {
        nome: "Prolog",
        descricao: "Linguagem de programação lógica usada principalmente em inteligência artificial e linguagens formais.",
        aplicacao: "Desenvolvimento de IA, processamento de linguagem natural, raciocínio lógico.",
        sintaxe: "hello :- write('Hello, world!').",
        link: "https://www.swi-prolog.org/",
        IDE: "SWI-Prolog, Visual Studio Code"
    },
    {
        nome: "COBOL",
        descricao: "Linguagem de programação voltada para o processamento de dados em negócios e instituições financeiras.",
        aplicacao: "Sistemas de bancos, grandes corporações, governo.",
        sintaxe: "DISPLAY 'Hello, world!'",
        link: "https://www.ibm.com/docs/en/cobol-for-zos/6.3",
        IDE: "IBM Developer for z/OS, Micro Focus COBOL"
    },
    {
        nome: "Fortran",
        descricao: "Linguagem de programação usada para computação científica e engenharia, especialmente para cálculos numéricos intensivos.",
        aplicacao: "Simulações científicas, modelagem matemática, física computacional.",
        sintaxe: "PRINT *, 'Hello, world!'",
        link: "https://fortran-lang.org/learn/",
        IDE: "Intel Fortran, Visual Studio Code"
    },
    {
        nome: "Ada",
        descricao: "Linguagem de programação desenvolvida para sistemas de tempo real e sistemas críticos de segurança.",
        aplicacao: "Sistemas aeronáuticos, defesa, sistemas embarcados.",
        sintaxe: "Put_Line ('Hello, world!');",
        link: "https://learn.adacore.com/",
        IDE: "GNAT, Visual Studio Code"
    },
    {
        nome: "Lisp",
        descricao: "Uma das linguagens de programação mais antigas, focada em computação simbólica e inteligência artificial.",
        aplicacao: "Inteligência artificial, linguagens formais, programação funcional.",
        sintaxe: "(print \"Hello, world!\")",
        link: "https://lisp-lang.org/learn/",
        IDE: "Emacs, LispWorks"
    },
    {
        nome: "VHDL",
        descricao: "Linguagem de descrição de hardware usada para modelar e simular circuitos digitais.",
        aplicacao: "Projetos de circuitos digitais, sistemas embarcados, desenvolvimento de hardware.",
        sintaxe: "HELLO: process begin report 'Hello, world!'; wait; end process;",
        link: "https://www.vhdlwhiz.com/vhdl-tutorials/",
        IDE: "ModelSim, Xilinx Vivado"
    },
    {
        nome: "Verilog",
        descricao: "Outra linguagem de descrição de hardware usada para o design e simulação de circuitos digitais.",
        aplicacao: "Design de hardware, FPGA, ASIC.",
        sintaxe: "initial begin $display(\"Hello, world!\"); end",
        link: "https://www.verilogpro.com/verilog-tutorials/",
        IDE: "ModelSim, Quartus"
    },
    {
        nome: "Objective-C",
        descricao: "Linguagem de programação orientada a objetos usada principalmente para desenvolvimento de aplicativos iOS antes do Swift.",
        aplicacao: "Desenvolvimento de aplicativos iOS, macOS.",
        sintaxe: "NSLog(@\"Hello, world!\");",
        link: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/",
        IDE: "Xcode"
    },
    {
        nome: "Forth",
        descricao: "Linguagem de programação de baixo nível, usada principalmente em sistemas embarcados e controle industrial.",
        aplicacao: "Sistemas embarcados, automação industrial, robótica.",
        sintaxe: ".\" Hello, world!\"",
        link: "https://www.forth.com/starting-forth/",
        IDE: "Gforth, SwiftForth"
    },
    {
        nome: "Groovy",
        descricao: "Linguagem de script que roda na JVM e é altamente interoperável com Java, com uma sintaxe mais simples.",
        aplicacao: "Desenvolvimento web, automação de scripts, pipelines de CI/CD.",
        sintaxe: "println 'Hello, world!'",
        link: "https://groovy-lang.org/documentation.html",
        IDE: "IntelliJ IDEA, Eclipse"
    },
    {
        nome: "Solidity",
        descricao: "Linguagem de programação usada para escrever contratos inteligentes na blockchain Ethereum.",
        aplicacao: "Desenvolvimento de contratos inteligentes, aplicações descentralizadas (dApps).",
        sintaxe: "pragma solidity ^0.4.0; contract HelloWorld { function sayHello() public pure returns (string memory) { return 'Hello, world!'; } }",
        link: "https://soliditylang.org/",
        IDE: "Remix, Truffle"
    },
    {
        nome: "Erlang",
        descricao: "Linguagem de programação concorrente, projetada para sistemas distribuídos e tolerantes a falhas.",
        aplicacao: "Telecomunicações, sistemas distribuídos, servidores de alta disponibilidade.",
        sintaxe: "io:format(\"Hello, world!~n\").",
        link: "https://www.erlang.org/doc.html",
        IDE: "Erlang/OTP, Visual Studio Code"
    },
    {
        nome: "Portugol",
        descricao: "Linguagem de programação educativa, utilizada para ensinar lógica de programação de forma simplificada com comandos em português.",
        aplicacao: "Educação, ensino de lógica de programação em ambientes escolares.",
        sintaxe: "escreva('Olá, mundo!')",
        link: "http://lite.acad.univali.br/portugol/",
        IDE: "Portugol Studio"
    },
    {
        nome: "Scratch",
        descricao: "Linguagem de programação visual desenvolvida pelo MIT para ensinar conceitos de programação a crianças por meio de blocos de arrastar e soltar.",
        aplicacao: "Educação infantil, introdução à lógica de programação, desenvolvimento de jogos e animações.",
        sintaxe: "Blocos visuais (não textual)",
        link: "https://scratch.mit.edu/",
        IDE: "Scratch (ambiente próprio)"
    }
];


