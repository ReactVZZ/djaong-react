from django.contrib import admin
from users.models import User


class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ('name', 'age',)


admin.site.register(User, UserAdmin)
