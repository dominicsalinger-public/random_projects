#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// max number of characters to save to current working directory output string
#define MAX_LINE 1024

// path from windows bash default to where I want it to go to
static const char DIR[] = "../../Users/Dominic/Desktop/projects";

int main () {
    // change directories
    if (chdir(DIR) == 0) {
        char cwd[MAX_LINE];
        // print new directory
        if (getcwd(cwd, MAX_LINE) != NULL) {
            fprintf(stdout, "Directory changed to %s\n", cwd);
        } else {
            fprintf(stderr, "Error: Unable to get the current working directory.\n");
            return EXIT_FAILURE;
        }
    } else {
        fprintf(stderr, "Error: Unable to change the current working directory,\n");
        return EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}