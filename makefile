
# WINDOWS VERSION (There's no /bin/date on Windows)
DATE_WITH_TIME = $(shell echo %date%:%time%)

checkpoint:
	@git add -A
	@git commit -m "checkpoint : $(DATE_WITH_TIME)"
	@git push
	@echo "checkpoint done!"
	
UNAME := $(shell uname)

ifeq ($(UNAME), Windows_NT)
echo "Windows"
endif
