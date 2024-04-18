DATE_WITH_TIME = $(shell echo %date%:%time%)

checkpoint:
	@git add -A
	@git commit -m "⏰ checkpoint : $(DATE_WITH_TIME)"
	@git push
	@echo "checkpoint done!"