# Sistema Bancário Atualizado

## Descrição

O **Sistema Bancário Atualizado** é um projeto desenvolvido em Python utilizando o framework Flask. Este sistema simula operações bancárias básicas, como depósitos, saques e visualização de extratos. O projeto inclui um layout melhorado para as páginas e ajustes nos arquivos estáticos.

## Funcionalidades

- **Página Principal**: Interface inicial com opções para realizar depósitos, saques e visualizar extratos.
- **Depósitos**: Permite adicionar fundos à conta.
- **Saques**: Permite retirar fundos da conta.
- **Extrato**: Visualiza o histórico de transações realizadas.

## Requisitos

- Python 3.x
- Flask

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

1. **Clone o Repositório**
   git clone https://github.com/seu-usuario/sistema-bancario-atualizado.git
   cd sistema-bancario-atualizado

2. **Crie um Ambiente Virtual (opcional, mas recomendado)**
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate

3. **Instale as Dependências**
pip install -r requirements.txt

4. **Execute o Projeto**
python app.py

## Estrutura do Projeto
app.py: Arquivo principal que contém a lógica do servidor Flask.
templates/: Contém os arquivos HTML para as páginas do aplicativo.
static/: Contém arquivos estáticos como CSS e JavaScript.
requirements.txt: Lista de dependências do projeto.

## Contribuição
Se você deseja contribuir com melhorias ou correções, siga estas etapas:

Faça um fork do repositório.
Crie uma nova branch (git checkout -b minha-nova-feature).
Faça as alterações necessárias e comite (git commit -am 'Adiciona nova feature').
Envie a branch para o repositório remoto (git push origin minha-nova-feature).
Abra um pull request no GitHub.

## Licença
Este projeto está licenciado sob a MIT License.
