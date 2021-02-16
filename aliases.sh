# lcl
alias node-test-build="docker build -t node-test ."
alias node-test-run="docker run --rm -ti node-test"
alias node-test="node-test-build && node-test-run"