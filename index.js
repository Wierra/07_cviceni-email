//E-MAIL, pozdrav
//1. V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.

const jmeno = `Věra Juračáková`
const goodbye = () => {
    const closingEl = document.querySelector(".email__closing")
    closingEl.textContent = "Na shledanou"
}

//2. Zavolejte funkci goodbye() na konci souboru index.js. Ověřte, že se na zobrazené stránce správně změnil pozdrav na konci e-mailu.
goodbye()

//3. Končit e-mail jen slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:

const closingEl = document.querySelector(".email__closing")

const goodbye1 = (name) => {
    closingEl.textContent = `S pozdravem ${name}`
}
goodbye1(`Věra Juračáková`)

//E-MAIL, tělo
//1. Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru.

const fillSubject = (subject) => {
    const subjectkEl = document.querySelector(".email__subject")
    subjectkEl.textContent = `Jsem totálně v pr....`
}

//2. Zavolejte funkci na konci souboru index.js a vykoušejte si nastavit předmět e-mailu na nějaký smysl

//3. Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.

//4. Zavolejte funkci na konci souboru index.js a ověřte, že v zobrazené stránce správně změní tělo e-mailu.

//5. Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.