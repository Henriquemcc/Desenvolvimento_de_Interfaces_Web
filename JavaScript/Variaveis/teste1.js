// Declarando variável nome
{
    let nome = 'Henrique';
    console.log(nome);
}

// Testando escopo
{
    {
        let nome = 'Henrique';
        console.log(nome);
    }
    console.log(nome);
}

// Testando escopo com var
{
    {
        var nome = 'Henrique';
        console.log(nome);
    }
    console.log(nome);
}

// Testando escopo com var e let
{
    {
        var nome = 'João';
        console.log(nome);
    }

    console.log(nome);

    {
        let nome = 'José';
        console.log(nome)
    }

    console.log(nome);
}

// Testando a declaração de uma constante
{
    const PI = 3.14159;
    console.log(PI);
}

// Testando variável
{
    let n = 2;
    console.log(n);

    n = 3;
    console.log(n);
}

// Testando redefinição do valor de uma constante
{
    const PI = 3.14159;
    console.log(PI);

    PI = 4;
    console.log(PI);
}