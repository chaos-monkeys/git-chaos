libs: requirements.txt 
	@[ -d $@ ] || mkdir $@ # Create libs if it doesn't exist
	pip install -r $< -t $@ 

output.zip: libs
	zip -r $@ *.py 
	cd $< &&  zip -rm ../$@ *

deploy: output.zip
	aws lambda update-function-code \
		--function-name data_parser \
		--zip-file fileb://$<

clean:
	rm output.zip
	rmdir libs

all: deploy clean
