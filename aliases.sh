# lcl
alias node-test-build="docker-compose build node"
alias node-test="node-test-build && docker-compose up node"
alias node-test-bash="docker-compose exec node bash"
alias node-test-mongo-bash="docker-compose exec db bash"
alias node-test-mongo-logs="docker logs -f mongodb --tail 100"