const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require("assert")
const should = require("chai").should();
async function toDoList() {

    //Abrir o navegador
    let driver= await new Builder().forBrowser("firefox").build();

    //Navegar até ao site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //Adicionar uma tarefa
    await driver.findElement(By.id ("inputTask")).sendKeys("Acordar cedo", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Limpar a casa", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Passear o cão", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Lavar a louça", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Tomar o pequeno almoço", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Ir treinar", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Tomar banho", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Vestir a roupa", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Pegar no carro", Key.RETURN)
    await driver.findElement(By.id ("inputTask")).sendKeys("Ir à Espanha beber um Mojito", Key.RETURN)
    
    //Assertion / Validação
    let acordarCedo = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value) {
        return value
    });
    let limparACasa = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]/label")).getText()
    .then(function(value) {
        return value
    });
    let passearOCão = await driver.findElement(By.xpath("/html/body/div/section/ul/li[3]/label")).getText()
    .then(function(value) {
        return value
    });
    let lavarALouça = await driver.findElement(By.xpath("/html/body/div/section/ul/li[4]/label")).getText()
    .then(function(value) {
        return value
    });
    let tomarOPequenoAlmoço = await driver.findElement(By.xpath("/html/body/div/section/ul/li[5]/label")).getText()
    .then(function(value) {
        return value
    });
    let irTreinar = await driver.findElement(By.xpath("/html/body/div/section/ul/li[6]/label")).getText()
    .then(function(value) {
        return value
    });
    let tomarBanho = await driver.findElement(By.xpath("/html/body/div/section/ul/li[7]/label")).getText()
    .then(function(value) {
        return value
    });
    let vestirARoupa = await driver.findElement(By.xpath("/html/body/div/section/ul/li[8]/label")).getText()
    .then(function(value) {
        return value
    });
    let pegarNoCarro = await driver.findElement(By.xpath("/html/body/div/section/ul/li[9]/label")).getText()
    .then(function(value) {
        return value
    });
    let irAEspanha = await driver.findElement(By.xpath("/html/body/div/section/ul/li[10]/label")).getText()
    .then(function(value) {
        return value
    });

    //Assertion utilizando o node puro
    //assert.strictEqual(seleniumText,"Aprender Selenium")

    //Assertion utilizando a biblioteca Chai - should
    acordarCedo.should.equal("Acordar cedo")
    limparACasa.should.equal("Limpar a casa")
    passearOCão.should.equal("Passear o cão")
    lavarALouça.should.equal("Lavar a louça")
    tomarOPequenoAlmoço.should.equal("Tomar o pequeno almoço")
    irTreinar.should.equal("Ir treinar")
    tomarBanho.should.equal("Tomar banho")
    vestirARoupa.should.equal("Vestir a roupa")
    pegarNoCarro.should.equal("Pegar no carro")
    irAEspanha.should.equal("Ir à Espanha beber um Mojito")

    //Fechar o navegador
    await driver.quit() 
}
toDoList()