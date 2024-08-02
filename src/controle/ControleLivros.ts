import { Livro } from "../modelo/Livro";

export class ControleLivros {
    livros: Array<Livro> = [
        new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.", ["Bert Bates", "Kathy Sierra"]),
        new Livro(2, 2, "Java, como Programar", "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.", ["Paul Deitel", "Harvey Deitel"]),
        new Livro(3, 3, "Core Java for the Impatient", "Readers familiar with Horstmann's original, two-volume \"Core Java\" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries", ["Cay Horstmann"]),
    ];

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const indice = this.livros.findIndex(l => l.codigo === codigo);
        if (indice >= 0) {
            this.livros.splice(indice, 1);
        }
    }
}