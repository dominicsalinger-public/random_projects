CC=gcc
CFLAGS=-Wall

all: init_dir
init_dir: init_dir.o
init_dir.o: init_dir.c

clean:
	rm -f init_dir init_dir.o
run: init_dir
	./init_dir