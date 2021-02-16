# lcl
alias node-test-build="docker-compose build node"
alias node-test="node-test-build && docker-compose up node"
alias node-test-bash="docker-compose exec node bash"