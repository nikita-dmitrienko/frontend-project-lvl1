install:
	npm install

even:
	npx babel-node src/bin/brain-even.js

calc:
	npx babel-node src/bin/brain-calc.js

gcd:
	npx babel-node src/bin/brain-gcd.js

progression:
	npx babel-node src/bin/brain-progression.js

prime:
	npx babel-node src/bin/brain-prime.js

test:
	npx babel-node dist/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .