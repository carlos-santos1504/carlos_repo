# Github

git config --global user.name "Usuario" // Configurar Usuario

git config --global user.email "E-mail" //Configurar Email

git init //Inicializar diretorio

vi Readme.md // Entrar no Readme.md ou Criar
        I // Inserir
        ESC // Sair no Insert
        :wq // Sair e salvar documento
	:qa! // Sair sem salvar

git status // Verificar estados dos arquivos no diretorio

git add . // Adicionar os novos arquivos

git commit -m "Mensagem" // Adicionar uma mensagem para o novo arquivo

git log // Mostrar todo os commit e id commit

git shortlog // Mostrar todos os titulo dos Commits de todos os usuarios

git checkout [nome do arquivo] // retornar alteração

git reset HEAD [nomde do arquivo] // retirar do add

git commit -am "Mensagem" // Adicionar comentario apenas para os arquivos alterados

git rm [nome do arquivo] // Remover arquivo

git reset
	--soft [id Commit] // Voltar pronto para dar (Commit)
	--mixed [id Commit] // Voltar pronto para dar (add.)
	--hard [id Commit] // Voltar para o commit anterior
	obs: Utilizar o id Commit anterior sempre
